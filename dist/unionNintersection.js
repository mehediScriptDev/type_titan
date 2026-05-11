"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getDashboard = (role) => {
    switch (role) {
        case 'user':
            return 'User dashboard';
        case 'admin':
            return 'Admin dashboard';
        case 'moderator':
            return 'Moderator dashboard';
    }
};
const getAccess = (role) => {
    switch (role) {
        case "user":
            return "User access granted";
        case "admin":
            return "Admin access granted";
        case "moderator":
            return "Moderator access granted";
    }
};
const usr = {
    name: "Mehedi",
    // image: new File([], "profile.jpg"), (i dont really know how this file systems actually works)
    number: "9876543210"
};
const superstar = {
    // name: "Superstar",
    namee: "ok",
    access: 3,
    imagee: "marsere",
    // image: new File([], "profile.jpg"),
    // number: "1234567890",
    // imagee: "superstar.jpg",
    deletee: true,
    delete: false,
    // roll: 333
    view: false
};
//# sourceMappingURL=unionNintersection.js.map