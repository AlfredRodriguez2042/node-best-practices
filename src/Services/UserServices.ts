export class UserServices {
    public _userRepository
    constructor({UserRepository}:any){
        this._userRepository = UserRepository
    }
    async getUsers(){
        const users = await this._userRepository.getUsers()
        return users
    }
    async createUser(user:any){
        const newUser = await this._userRepository.createUser(user)
        return newUser
    }
    async updateUser(user:any){
        const updateUser= await this._userRepository.updateUser(user)
        return updateUser
    }
    async deleteUser(user:any){
        const deleteUser = await this._userRepository.deleteUser(user)
        return deleteUser
    }
}