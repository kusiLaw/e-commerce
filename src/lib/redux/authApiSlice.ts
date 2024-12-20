import { url } from "inspector";
import { apiSlice } from "./services/apiSlice";

interface User{
    first_name: string;
    last_name: string;
    email: string;
}

interface SocialAuthArgs{
    provider: string;
    state: string;
    code: string
}

interface CreateUserResponseArgs{
    success: boolean;
    user: User
}


const authApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        retrieveUser: builder.query<User, void>({
            query: () => '/users/me/'
        }),

        socialAuthicate: builder.mutation<CreateUserResponseArgs, SocialAuthArgs >({
            query: ({ provider, state, code }) => ({
                url: `auth/o/${provider}/?state=${encodeURIComponent(
                    state
                )}&code=${encodeURIComponent(code)}`,
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded',
                }
            })
        }),

        login: builder.mutation({
            query: ({ email, password }) => ({
                url: 'auth/jwt/create/',
                method: 'POST',
                body: { email, password }
            })
        }),

        register: builder.mutation({
            query: ({first_name, last_name, email, password, re_password}) => ({
                url: 'auth/users/',
                method: 'POST',
                body: {first_name, last_name, email, password, re_password}
            })
        }),
        
        verify: builder.mutation({
            query: () => ({
                url: 'auth/jwt/verify/',
                method: 'POST',
            }),
        }),
         activation: builder.mutation({
            query: ({uid, token}) => ({
                url: 'auth/users/activation/',
                 method: 'POST',
                body:{uid, token}
            }),
        }),
        resetPassword: builder.mutation({
            query: (email) => ({
                url: 'auth/users/reset_password/',
                 method: 'POST',
                body:{email}
            }),
        }),
        resetPasswordConfirm: builder.mutation({
            query: ({uid, token, new_password, re_new_password}) => ({
                url: 'auth/users/reset_password_confirm/',
                 method: 'POST',
                body:{uid, token, new_password, re_new_password}
            }),
        }),
        logout: builder.mutation({
            query: () => ({
                url: 'auth/logout',
                method: 'POST',
            }),
        }),



    })
});

export const {
    useRetrieveUserQuery,
    useSocialAuthicateMutation,
    useLoginMutation,
    useLogoutMutation,
    useRegisterMutation,
    useVerifyMutation,
    useActivationMutation,
    useResetPasswordMutation,
    useResetPasswordConfirmMutation
} = authApiSlice