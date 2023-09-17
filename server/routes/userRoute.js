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
  getAllRequests,
  sendOffer,
  sendCustomRequest,
  acceptOffer,
  getLawyerSentOffers,
  getAllLawyerOffers,
  getAllAcceptedLawyerOffers,
  getAllSentLawyerOffers,
  getAllSentRequestsByClient,
  getAllReturnOffers,
  deleteAllNotifications,
  deleteNotification,
  getAllNotifications,
  getClientReturnOffers,
} = require("../controller/userController");
const { isAuthebticatedUser, authorizeRoles,checkApprovedStatus } = require("../middleware/auth");

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
  .get( getSingleUser)
  // .put(isAuthebticatedUser, authorizeRoles("admin"), updateUserRole)
  // .delete(isAuthebticatedUser, authorizeRoles("admin"), deleteUser);


router.route("/admin/lawyers").get(isAuthebticatedUser,authorizeRoles("admin"),getAllLawyers)
router.route("/admin/lawyers/approve").get(isAuthebticatedUser,authorizeRoles("admin"),getAllApproveLawyers)

router.route("/admin/lawyers/pending").get(isAuthebticatedUser,authorizeRoles("admin"),getAllPendingLawyers)

router.route("/admin/lawyer/status").put(isAuthebticatedUser,authorizeRoles("admin"),updateLawyerStatus)

router.route("/search/lawyers").get(searchLawyers)


// Interaction Routes
router.route("/send-request/:lawyerId").post(isAuthebticatedUser,sendRequest)
// Lawyer sending offer to client 
router.route("/send-offer/:clientId").post(isAuthebticatedUser,checkApprovedStatus,sendOffer)

// Get All request of a clients to a lawyer
router.route("/lawyers/requests").get(isAuthebticatedUser,checkApprovedStatus,getAllRequests)


// Custom Send Request to All 
router.route("/custom/send-custom-request/").post(isAuthebticatedUser,sendCustomRequest)

// Accept Lawyer Offer 
router.route("/accept-offer/:offerId").post(isAuthebticatedUser,acceptOffer)

// Get all offers sent by a lawyer
router.route('/lawyers/sent/offers').get(isAuthebticatedUser,checkApprovedStatus,getAllSentLawyerOffers );


// Get all offers Accpeted of a lawyer
router.route('/lawyers/accepted/offers').get(isAuthebticatedUser,checkApprovedStatus,getAllAcceptedLawyerOffers );

// Get all sent requests by a client
router.route('/client/sent-requests').get(isAuthebticatedUser, getAllSentRequestsByClient);
router.route('/client/return-requests').get(isAuthebticatedUser, getClientReturnOffers);



// Get all notifications for a user
router.get('/notifications',isAuthebticatedUser, getAllNotifications);

// Delete a single notification by ID
router.delete('/notifications/:notificationId',isAuthebticatedUser, deleteNotification);

// Delete all notifications for a user
router.delete('/notifications', isAuthebticatedUser,deleteAllNotifications);


module.exports = router;
