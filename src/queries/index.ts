import {AxiosError} from "axios";
import {useQuery} from "react-query";
import {homePageService} from "services";
import {queriesKey} from "Common";
import {pagesDTO, pageDTO} from "Common";

const {getPages, getPage, postNewsletter} = queriesKey;

export const usePages = () =>
	useQuery<pagesDTO[], AxiosError>(getPages, () => homePageService.getPages(), {
		staleTime: 1000 * 15,
	});

export const usePage = (id: string) =>
	useQuery<pageDTO, AxiosError>(getPage, () => homePageService.getPage(id), {
		staleTime: 1000 * 15,
	});
export const useNewsletter = (email: string) =>
	useQuery<pageDTO, AxiosError>(postNewsletter, () => homePageService.postNewsletter(email), {
		enabled: false,
	});
