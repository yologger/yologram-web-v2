// import { useMutation } from '@tanstack/react-query';
// import { message } from 'antd';
// // import { getUserInfo, joinUser, loginUser, logoutUser } from '../apis/auth';
// import { join } from '../apis/ums';

// // 회원가입 mutation
// export const useJoin = () => {
//   const navigate = useNavigate();

//   return useMutation({
//     mutationFn: join,
//     onSuccess: (data) => {
//       message.success('회원가입이 완료되었습니다!');
//       // localStorage.setItem('token', data.token);
//       // navigate('/');
//     },
//     onError: (error: any) => {
//       const errorMessage = error.response?.data?.message || '회원가입에 실패했습니다.';
//       message.error(errorMessage);
//     },
//   });
// };

// // 로그인 mutation
// export const useLogin = () => {
//   const navigate = useNavigate();
//   const queryClient = useQueryClient();

//   return useMutation({
//     mutationFn: loginUser,
//     onSuccess: (data) => {
//       message.success('로그인되었습니다!');
//       localStorage.setItem('token', data.token);
//       queryClient.setQueryData(['user'], data.user);
//       navigate('/');
//     },
//     onError: (error: any) => {
//       const errorMessage = error.response?.data?.message || '로그인에 실패했습니다.';
//       message.error(errorMessage);
//     },
//   });
// };

// // 로그아웃 mutation
// export const useLogout = () => {
//   const navigate = useNavigate();
//   const queryClient = useQueryClient();

//   return useMutation({
//     mutationFn: logoutUser,
//     onSuccess: () => {
//       message.success('로그아웃되었습니다.');
//       queryClient.clear();
//       navigate('/login');
//     },
//     onError: () => {
//       message.error('로그아웃 중 오류가 발생했습니다.');
//     },
//   });
// };

// // 사용자 정보 조회 query
// export const useUser = () => {
//   return useQuery({
//     queryKey: ['user'],
//     queryFn: getUserInfo,
//     enabled: !!localStorage.getItem('token'),
//     staleTime: 5 * 60 * 1000, // 5분
//   });
// };
