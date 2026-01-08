const Profile = () => {
  const email = "usuario@email.com";

  return (
    <div className="container mt-5">
      <h2>Perfil</h2>
      <p>Email: {email}</p>

      <button className="btn btn-danger mt-3">
        Cerrar sesión 🔒
      </button>
    </div>
  );
};

export default Profile;