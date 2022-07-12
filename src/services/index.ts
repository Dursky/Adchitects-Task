import axios from "axios";

class _pageService {
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
}

const pageService = new _pageService();

export {pageService, _pageService};
