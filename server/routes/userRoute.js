const express = require("express");
const {
  registerUser,
  loginUser,
  logout,
  forgotPassword,
  resetPassword,
  getUserDetails,
  updatePassowrd,
  updateProfile,
  getAllUser,
  getSingleUser,
  updateUserRole,
  deleteUser,
  getAllLawyers,
  getAllApproveLawyers,
  getAllPendingLawyers,
  updateLawyerStatus,
  searchLawyers,
  sendRequest,
} = require("../controller/userController");
const { isAuthebticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

router.route("/register").post(registerUser);

router.route("/login").post(loginUser);

router.route("/password/forgot").post(forgotPassword);

router.route("/password/reset/:token").put(resetPassword);

router.route("/logout").get(logout);

router.route("/me").get(isAuthebticatedUser, getUserDetails);

router.route("/password/update").put(isAuthebticatedUser, updatePassowrd);

router.route("/me/update").put(isAuthebticatedUser, updateProfile);

router
  .route("/users")
  .get(isAuthebticatedUser, authorizeRoles("admin"), getAllUser);

router
  .route("/user/:id")
  .get(isAuthebticatedUser, getSingleUser)
  // .put(isAuthebticatedUser, authorizeRoles("admin"), updateUserRole)
  // .delete(isAuthebticatedUser, authorizeRoles("admin"), deleteUser);


router.route("/admin/lawyers").get(isAuthebticatedUser,authorizeRoles("admin"),getAllLawyers)
router.route("/admin/lawyers/approve").get(isAuthebticatedUser,authorizeRoles("admin"),getAllApproveLawyers)

router.route("/admin/lawyers/pending").get(isAuthebticatedUser,authorizeRoles("admin"),getAllPendingLawyers)

router.route("/admin/lawyer/status").put(isAuthebticatedUser,authorizeRoles("admin"),updateLawyerStatus)

router.route("/search/lawyers").get(isAuthebticatedUser,searchLawyers)


// Interaction Routes
router.route("/send-request/:lawyerId").post(isAuthebticatedUser,sendRequest)

module.exports = router;
