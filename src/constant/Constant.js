const BaseUrl = 'http://192.168.1.224:9091/'
const salonistUrl = 'https://salonist.io/wordpressapi/'
const salonistLocal = 'http://192.168.1.224:3000/api/salon/'
const UserService = 'userservice/'
const OurBestService = 'ourbestservice/'

export const addUser = BaseUrl + UserService +'addUser'
export const login = BaseUrl + UserService +'login'
export const sendOtp = BaseUrl + UserService +'sendOtp'
export const verifyOtp = BaseUrl + UserService +'verifyOtp'
export  const searchBestService = BaseUrl + OurBestService + 'searchBestService'

export const domainId = '21676'



// SALONIST

export const services = salonistUrl + 'services'
export const localService = salonistLocal +'services'


