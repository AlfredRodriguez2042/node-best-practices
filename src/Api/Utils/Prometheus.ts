import client from 'prom-client'

export const Prometheus = async (req: any, res: any) => {
  const configMetrics = client.collectDefaultMetrics
  const Registry = client.Registry
  const register = new Registry()
  configMetrics({ register })

  res.set('Content-Type', register.contentType)
  res.end(await register.metrics())
}
