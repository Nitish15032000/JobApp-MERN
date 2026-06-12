
const isRecruiter = async (req, res, next) => {
   try {
      if (!req.user || req.user.role !== "recruiter") {
         return res.status(403).json({
            message: "Access denied. Only recruiters are allowed.",
            success: false,
         });
      }
      next();
   } catch (error) {
      console.error(error);
      return res.status(500).json({
         message: "Internal server error.",
         success: false,
      });
   }
}
export default isRecruiter;