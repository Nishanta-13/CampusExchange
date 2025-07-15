const supabase= require("../utils/supabaseClient");

const verifyUser = async (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    try {
        const { data, error } = await supabase.auth.getUser(token);
        if (error || !data.user) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        req.user = data.user; // Attach user info to request
        next();
    } catch (err) {
        console.error("Error verifying user:", err);
        return res.status(500).json({ message: "Internal server error" });
    }
}
export  default verifyUser;