import { useInfiniteQuery } from '@tanstack/react-query';
import { getRecentBoards } from '../../apis/bms/getRecentBoards.api';

export const useGetRecentBoardsQuery = () => {
  const size = 10;
  return useInfiniteQuery({
    queryKey: ['boards', 'recent'],
    queryFn: ({ pageParam: nextCursor }) => {
      return getRecentBoards({ size: size, nextCursor });
    },
    initialPageParam: undefined as string | undefined,
    getNextPageParam: (lastPage) => {
      return lastPage.nextCursor ?? undefined;
    },
    select: (data) => ({
      pages: data.pages.flatMap((page) => page.data),
      pageParams: data.pageParams,
    }),
  });
};
