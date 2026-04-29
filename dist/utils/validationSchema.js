"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUserSchema = exports.registerUserSchema = exports.todoSchema = void 0;
exports.todoSchema = {
    title: {
        isString: {
            errorMessage: 'title must be a string'
        },
        notEmpty: {
            errorMessage: 'title must not be empty'
        }
    },
    description: {
        isString: {
            errorMessage: 'description must be a string'
        },
        notEmpty: {
            errorMessage: 'description must not be empty'
        }
    },
    userId: {
        isInt: {
            errorMessage: 'A valid userId is required'
        }
    }
};
exports.registerUserSchema = {
    firstName: {
        isString: {
            errorMessage: 'First Name must be a string'
        },
        isLength: {
            options: {
                min: 3,
                max: 32
            },
            errorMessage: 'First Name must not be 3 and more than 32'
        },
        notEmpty: {
            errorMessage: 'First Name must not be empty'
        }
    },
    lastName: {
        isString: {
            errorMessage: 'Last Name must be a string'
        },
        isLength: {
            options: {
                min: 3,
                max: 32
            },
            errorMessage: 'Last Name must not be less than 3 and more than 32'
        },
        notEmpty: {
            errorMessage: 'Last Name must not be empty'
        },
    },
    email: {
        isString: {
            errorMessage: 'Email must be a string'
        },
        notEmpty: {
            errorMessage: 'Email must not be empty'
        }
    },
    password: {
        isLength: {
            options: {
                min: 5,
                max: 32
            },
            errorMessage: 'Password must not be less than 5 and more than 32'
        },
        notEmpty: {
            errorMessage: 'Password must not be empty'
        }
    }
};
exports.loginUserSchema = {
    email: {
        isString: {
            errorMessage: 'Email must be a string'
        },
        notEmpty: {
            errorMessage: 'Email must not be empty'
        }
    },
    password: {
        isLength: {
            options: {
                min: 5,
                max: 32
            },
            errorMessage: 'Password must not be less than 5 and more than 32'
        },
        notEmpty: {
            errorMessage: 'Password must not be empty'
        }
    }
};
