import React from "react";

function LoginPage() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-4">

          <div className="card shadow">
            <div className="card-body">

              <h3 className="text-center mb-4">Iniciar Sesión</h3>

              <form>

                <div className="mb-3">
                  <label className="form-label">Correo</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="admin@admin.com"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Contraseña</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="********"
                  />
                </div>

                <button className="btn btn-primary w-100">
                  Ingresar
                </button>

              </form>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default LoginPage;