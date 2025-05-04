import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import ConfirmModal from "../modals/ConfirmModal";
import { useAuth } from "../store/auth";

export default function Applications() {
  const [applications, setApplications] = useState([]);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [selectedAppId, setSelectedAppId] = useState(null);
  const { authorizationToken } = useAuth();
  const openConfirmModal = (id) => {
    setSelectedAppId(id);
    setIsConfirmModalOpen(true);
  };

  const closeConfirmModal = () => {
    setSelectedAppId(null);
    setIsConfirmModalOpen(false);
  };

  const confirmDelete = async () => {
    if (selectedAppId) {
      await deleteApplication(selectedAppId);
    }
    closeConfirmModal();
  };
  const fetchApplications = async () => {
    try {
      const res = await fetch("http://localhost:4002/api/applicants/", {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const res_data = await res.json();
      console.log("Response data from applicats controller: ", res_data);
      if (res.ok) {
        setApplications(res_data);
      } else {
        toast.error(
          res_data.extraDetails ? res_data.extraDetails : res_data.message
        );
      }
    } catch (e) {
      toast.error(e.message);
    }
  };
  useEffect(() => {
    fetchApplications();
  }, []);
  // Delete functionality
  const deleteApplication = async (id) => {
    try {
      const res = await fetch(
        `http://localhost:4002/api/applicants/${id}/delete`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: authorizationToken,
          },
        }
      );
      const res_data = await res.json();
      if (res.ok) {
        fetchApplications();
        toast.success("Application deleted Successfully!");
      } else {
        toast.error(res_data?.res_data.message);
      }
    } catch (e) {
      console.error(e);
      toast.error("Unable to delete application.");
    }
  };
  return (
    <section className="applications-section">
      {isConfirmModalOpen && (
        <ConfirmModal
          isOpen={isConfirmModalOpen}
          isClose={closeConfirmModal}
          onConfirm={confirmDelete}
        />
      )}
      <h3>Applications</h3>
      <div className="applications">
        <table>
          <thead>
            <tr>
              <th>Fullname</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Resume</th>
              <th>Portfolio</th>
              <th>Applied For</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {applications.length !== 0 ? (
              applications.map((app) => {
                const {
                  _id,
                  fullname,
                  email,
                  phone,
                  resumeLink,
                  portfolio,
                  role,
                } = app;
                return (
                  <tr key={_id}>
                    <td>{fullname}</td>
                    <td className="link">
                      <Link to={`mailto:${email}`}>{email}</Link>
                    </td>
                    <td>{phone}</td>
                    <td className="link">
                      <Link to={resumeLink}>{fullname} Resume</Link>
                    </td>
                    <td className="link">
                      <Link to={portfolio}>{fullname} Portfolio</Link>
                    </td>
                    <td className="role">{role}</td>
                    <td className="delete">
                      <button onClick={() => openConfirmModal(_id)}>
                        <MdDelete className="delete-icon" />
                      </button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td>No Applications Found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
