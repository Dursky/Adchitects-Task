import axios from "axios";

class _homePageService {
	getPages() {
		return axios
			.get("https://adchitects-cms.herokuapp.com/pages", {
				auth: {
					username: "adchitects",
					password: "jsrulezzz",
				},
			})
			.then((res) => res.data);
	}

	getPage(id: string) {
		return axios
			.get(`https://adchitects-cms.herokuapp.com/page/${id}`, {
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
				`https://adchitects-cms.herokuapp.com/newsletter`,
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
		//	.catch((err) => err);
	}
}

const homePageService = new _homePageService();

export {homePageService, _homePageService};
