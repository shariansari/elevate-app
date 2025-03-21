const BaseUrl = 'http://192.168.1.224:9091/'
const salonistUrl = 'https://salonist.io/wordpressapi/'
const salonistLocal = 'http://192.168.1.224:3000/api/salon/'
const UserService = 'http://192.168.1.224:9090/userservice/'
const OurBestService = 'ourbestservice/'
const CartService = 'cartservice/'

export const addUser = UserService +'addUser'
export const login =   UserService +'login'
export const sendOtp =   UserService +'sendOtp'
export const verifyOtp =  UserService +'verifyOtp'
export  const searchBestService = BaseUrl + OurBestService + 'searchBestService'
export const addCart = BaseUrl + CartService + 'addCart'
export const searchCart = BaseUrl + CartService + 'searchCart'
export const deleteCart = BaseUrl + CartService + 'deleteCart'
// export const deleteByServiceAndUser = BaseUrl + CartService + 'deleteByServiceAndUser'

export const domainId = '21676'



// SALONIST

export const services = salonistUrl + 'services'
export const localService = salonistLocal +'services'


