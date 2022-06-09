export module API {
  export namespace Response {
    export interface SuccessfulResponse {
      success: boolean;
    }
  }

  export namespace Auth {
    export interface UserData {
      userName: string;
      firstName: string;
      lastName: string;
      isAdmin: boolean;
      followers: string[];
      following: string[];
    }

    export interface User extends Response.SuccessfulResponse {
      user: UserData;
      token: string;
    }
  }

  export namespace FormData {
    export interface LoginFormData {
      userName: string;
      password: string;
    }

    export interface RegisterFormData extends LoginFormData {
      firstName: string;
      lastName: string;
    }
  }
}
