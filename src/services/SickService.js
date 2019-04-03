

import ApiAdmin from './config/ApiAdmin';

const SickService = {
    fetchListSicks() {
        return ApiAdmin.get('/patient', {
            headers: {
                auth_token: localStorage.getItem('token')
            }
        })
    },
    updateSick(id, data) {
        const headers = {
            headers: {
                auth_token: localStorage.getItem('token')
            }
        }
        return ApiAdmin.put('/patient/' + id, data, headers)
    },
    createSick() {
        return ApiAdmin.post('/patient')
    },
}
  
export default SickService
  