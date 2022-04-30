import http from "./http-common";
import AuthHeader from "./admin.auth.header";

const END_POINT = "admin/customers/";

class AdminCustomerService {
    paginate(query) {
        return http.get(
            `${query.url}&per_page=${query.per_page}&search=${query.search}&dateFrom=${query.dateFrom}&dateTo=${query.dateTo}&dateToTime=${query.dateToTime}&selected=${query.selected}`,
            {
                headers: { Authorization: "Bearer " + AuthHeader() },
            }
        );
    }

    fetchCustomer(query) {
        return http.get(
            `${END_POINT}?page=${query.page}&per_page=${query.per_page}&search=${query.search}&dateFrom=${query.dateFrom}&dateTo=${query.dateTo}&dateToTime=${query.dateToTime}&selected=${query.selected}`,
            { headers: { Authorization: "Bearer " + AuthHeader() } }
        );
    }

    fetchCustomerById(client) {
        return http.get(`${END_POINT}${client}`, {
            headers: { Authorization: "Bearer " + AuthHeader() },
        });
    }

    updateCustomer(id, data) {
        return http.put(`${END_POINT}${id}`, data, {
            headers: { Authorization: "Bearer " + AuthHeader() },
        });
    }

    create(data) {
        return http.post(`${END_POINT}`, data, {
            headers: {
                Authorization: "Bearer " + AuthHeader(),
            },
        });
    }

    update(id, data) {
        return http.put(`${END_POINT}${id}`, data, {
            headers: { Authorization: "Bearer " + AuthHeader() },
        });
    }

    delete(id) {
        return http.delete(`${END_POINT}${id}`, {
            headers: { Authorization: "Bearer " + AuthHeader() },
        });
    }
}

export default new AdminCustomerService();
