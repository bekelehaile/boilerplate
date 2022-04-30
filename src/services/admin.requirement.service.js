import http from "./http-common";
import AuthHeader from "./admin.auth.header";

const END_POINT = "admin/requirements/";

class AdminRequirementService {
    paginate(data) {
        return http.get(
            `${data.url}&per_page=${data.per_page}&search=${data.search}`,
            {
                headers: { Authorization: "Bearer " + AuthHeader() },
            }
        );
    }

    fetchRequirement(data) {
        return http.get(
            `${END_POINT}?page=${data.page}&per_page=${data.per_page}&search=${data.search}`,
            { headers: { Authorization: "Bearer " + AuthHeader() } }
        );
    }

    fetchRequirementById(requirement) {
        return http.get(`${END_POINT}${requirement}`, {
            headers: { Authorization: "Bearer " + AuthHeader() },
        });
    }

    create(data) {
        return http.post(`${END_POINT}`, data, {
            headers: {
                Authorization: "Bearer " + AuthHeader(),
                "Content-Type": "multipart/form-data",
            },
        });
    }

    update(id, data) {
        return http.post(`${END_POINT}update/${id}`, data, {
            headers: {
                Authorization: "Bearer " + AuthHeader(),
                "Content-Type": "multipart/form-data",
            },
        });
    }

    delete(id) {
        return http.delete(`${END_POINT}${id}`, {
            headers: { Authorization: "Bearer " + AuthHeader() },
        });
    }

}

export default new AdminRequirementService();