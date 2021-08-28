import client from 'prom-client'
import url from 'url'
const Registry = client.Registry
const register = new Registry()
// register.setDefaultLabels({
//   serviceName: 'api',
// })
const httpRequestDurationMicroseconds = new client.Histogram({
  name: 'http_request_duration_seconds',
  help: 'Duration of HTTP requests in seconds',
  labelNames: ['method', 'route', 'code'],
  buckets: [0.1, 0.3, 0.5, 0.7, 1, 3, 5, 7, 10], // 0.1 to 10 seconds
})

export const Prometheus = async (req: any, res: any) => {
  const configMetrics = client.collectDefaultMetrics
  const end = httpRequestDurationMicroseconds.startTimer()
  const route = url.parse(req.url).pathname
  configMetrics({ register })
  register.registerMetric(httpRequestDurationMicroseconds)
  res.set('Content-Type', register.contentType)
  res.end(await register.metrics())
  end({ route: route as any, code: res.statusCode, method: req.method })
}
