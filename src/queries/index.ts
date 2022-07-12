import {AxiosError} from "axios";
import {useQuery} from "react-query";
import {pageService} from "services";
import {queriesKey} from "Common";
import {pagesDTO, pageDTO} from "Common";

const {getPages, getPage} = queriesKey;

export const usePages = () =>
	useQuery<pagesDTO[], AxiosError>(getPages, () => pageService.getPages(), {
		staleTime: 1000 * 15,
	});

export const usePage = (id: string) =>
	useQuery<pageDTO, AxiosError>(getPage, () => pageService.getPage(id), {
		staleTime: 1000 * 15,
	});
