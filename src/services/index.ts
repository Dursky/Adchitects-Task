import axios from "axios";

const mainUrl = `https://${process.env.REACT_APP_API_SUB_DOMAIN}.${process.env.REACT_APP_API_DOMAIN_SERVER}.com`;
class _homePageService {
	getPages() {
		return axios
			.get(`${mainUrl}/pages`, {
				auth: {
					username: "adchitects",
					password: "jsrulezzz",
				},
			})
			.then((res) => res.data);
	}

	getPage(id: string) {
		return axios
			.get(`${mainUrl}/page/${id}`, {
				auth: {
					username: "adchitects",
					password: "jsrulezzz",
				},
			})
			.then((res) => res.data);
	}
	postNewsletter(email: string) {
		return axios
			.post(
				`${mainUrl}/newsletter`,
				{
					email,
				},
				{
					auth: {
						username: "adchitects",
						password: "jsrulezzz",
					},
				},
			)
			.then((res) => res.data);
	}
}

const homePageService = new _homePageService();

export {homePageService, _homePageService};
