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