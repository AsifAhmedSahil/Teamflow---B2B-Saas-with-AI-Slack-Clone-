import { os } from "@orpc/server";

export const base = os.$context<{request:Request}>().errors({
    RATE_LIMITED:{
        message:"You are being rate limited. "
    },
    BAD_REQUEST:{
        message:"bad request"
    },
    NOT_FOUND:{
        message:"Not Found"
    },
    FORBIDDEN:{
        message:"This is forbidden"
    },
    UNAUTHORIZED:{
        message:"You are unauthorized",
    },
    INTERNAL_SERVER_ERROR:{
        message:"internal server error"
    }
})