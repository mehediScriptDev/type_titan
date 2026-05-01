const getDashboard = (role: 'user' | 'admin' | 'moderator') => {
    switch (role) {
        case 'user':
            return 'User dashboard';
        case 'admin':
            return 'Admin dashboard';
        case 'moderator':
            return 'Moderator dashboard';
    }
};

type userRole = "user" | "admin" | "moderator"

const getAccess = (role: userRole) => {
    switch(role){
        case "user":
            return "User access granted";
        case "admin":
            return "Admin access granted";
        case "moderator":
            return "Moderator access granted";
    }
}

type UserRole = {
    name: string;
    // image: File;
    number: string;
}

const usr: UserRole = {
    name: "Mehedi",
    // image: new File([], "profile.jpg"), (i dont really know how this file systems actually works)
    number: "9876543210"
}
type moderatorRole = {
    imagee: string;
    deletee: true;
    view: boolean
}

type AdminRole = {
    namee: string;
    access: number;
    delete: boolean;
}
type adminRole = moderatorRole & AdminRole;

const superstar: adminRole = {
    // name: "Superstar",
    namee: "ok",
    access:3,
    imagee: "marsere",
    // image: new File([], "profile.jpg"),
    // number: "1234567890",
    // imagee: "superstar.jpg",
    deletee: true,
    delete:false,
    // roll: 333
    view: false
}