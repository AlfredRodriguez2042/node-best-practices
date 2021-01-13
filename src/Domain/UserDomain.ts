class UserDomain {
  public readonly id:string
  public name:string
  public email:string
  public password:string
  constructor(props:Omit<UserDomain,"id">,id?:string){}
  fullname(){
  return this.name
  }
}
