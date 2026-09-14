import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      company,
      service,
      message,
    } = body;

    // ============================================
    // VALIDACIÓN
    // ============================================

    if (!name || !email || !service || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Completa todos los campos obligatorios.",
        },
        {
          status: 400,
        }
      );
    }

    // ============================================
    // ENVÍO DEL CORREO
    // ============================================

    const { data, error } = await resend.emails.send({
      from: "DevPass <onboarding@resend.dev>",
      to: ["jaimespassunijeferson@gmail.com"],

      replyTo: email,

      subject: `Nuevo proyecto desde DevPass — ${service}`,

      html: `
        <!DOCTYPE html>

        <html lang="es">

        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />

          <title>Nuevo contacto — DevPass</title>
        </head>

        <body
          style="
            margin: 0;
            padding: 0;
            background: #020617;
            font-family: Arial, Helvetica, sans-serif;
            color: #f8faff;
          "
        >

          <div
            style="
              max-width: 680px;
              margin: 40px auto;
              padding: 0 20px;
            "
          >

            <!-- HEADER -->

            <div
              style="
                padding: 30px;
                border: 1px solid rgba(61,165,255,0.15);
                background: #050d1a;
                border-radius: 16px 16px 0 0;
              "
            >

              <div
                style="
                  font-size: 11px;
                  letter-spacing: 3px;
                  color: #3da5ff;
                  text-transform: uppercase;
                  margin-bottom: 14px;
                "
              >
                DevPass / Contacto
              </div>

              <h1
                style="
                  margin: 0;
                  font-size: 28px;
                  line-height: 1.2;
                  color: #ffffff;
                "
              >
                Nuevo proyecto
              </h1>

              <p
                style="
                  margin: 10px 0 0;
                  color: #718096;
                  font-size: 14px;
                "
              >
                Alguien ha enviado una solicitud desde tu sitio web.
              </p>

            </div>


            <!-- INFORMACIÓN -->

            <div
              style="
                padding: 30px;
                border-left: 1px solid rgba(61,165,255,0.15);
                border-right: 1px solid rgba(61,165,255,0.15);
                background: #071426;
              "
            >

              <!-- NOMBRE -->

              <div style="margin-bottom: 24px;">

                <div
                  style="
                    font-size: 10px;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                    color: #475569;
                    margin-bottom: 7px;
                  "
                >
                  Nombre
                </div>

                <div
                  style="
                    font-size: 15px;
                    color: #f8faff;
                  "
                >
                  ${escapeHtml(name)}
                </div>

              </div>


              <!-- EMAIL -->

              <div style="margin-bottom: 24px;">

                <div
                  style="
                    font-size: 10px;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                    color: #475569;
                    margin-bottom: 7px;
                  "
                >
                  Correo
                </div>

                <div
                  style="
                    font-size: 15px;
                    color: #a7d3ff;
                  "
                >
                  ${escapeHtml(email)}
                </div>

              </div>


              <!-- EMPRESA -->

              <div style="margin-bottom: 24px;">

                <div
                  style="
                    font-size: 10px;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                    color: #475569;
                    margin-bottom: 7px;
                  "
                >
                  Empresa / Proyecto
                </div>

                <div
                  style="
                    font-size: 15px;
                    color: #f8faff;
                  "
                >
                  ${escapeHtml(company || "No especificado")}
                </div>

              </div>


              <!-- SERVICIO -->

              <div style="margin-bottom: 24px;">

                <div
                  style="
                    font-size: 10px;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                    color: #475569;
                    margin-bottom: 7px;
                  "
                >
                  Servicio
                </div>

                <div
                  style="
                    display: inline-block;
                    padding: 7px 12px;
                    border-radius: 8px;
                    background: rgba(30,107,255,0.12);
                    border: 1px solid rgba(61,165,255,0.18);
                    font-size: 12px;
                    color: #a7d3ff;
                  "
                >
                  ${escapeHtml(service)}
                </div>

              </div>


              <!-- MENSAJE -->

              <div>

                <div
                  style="
                    font-size: 10px;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                    color: #475569;
                    margin-bottom: 10px;
                  "
                >
                  Mensaje
                </div>

                <div
                  style="
                    padding: 18px;
                    border-radius: 12px;
                    border: 1px solid rgba(255,255,255,0.06);
                    background: #020617;
                    font-size: 14px;
                    line-height: 1.7;
                    color: #94a3b8;
                    white-space: pre-wrap;
                  "
                >
                  ${escapeHtml(message)}
                </div>

              </div>

            </div>


            <!-- FOOTER -->

            <div
              style="
                padding: 22px 30px;
                border: 1px solid rgba(61,165,255,0.15);
                background: #050d1a;
                border-radius: 0 0 16px 16px;
              "
            >

              <div
                style="
                  font-size: 11px;
                  color: #475569;
                "
              >
                Enviado desde
                <strong style="color: #718096;">
                  DevPass
                </strong>
              </div>

            </div>

          </div>

        </body>

        </html>
      `,
    });

    // ============================================
    // ERROR DE RESEND
    // ============================================

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        {
          success: false,
          message: "No se pudo enviar el mensaje.",
        },
        {
          status: 500,
        }
      );
    }

    // ============================================
    // RESPUESTA EXITOSA
    // ============================================

    return NextResponse.json({
      success: true,
      message: "Mensaje enviado correctamente.",
      id: data?.id,
    });

  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Ocurrió un error inesperado.",
      },
      {
        status: 500,
      }
    );
  }
}


// ==================================================
// PROTECCIÓN BÁSICA DEL HTML
// ==================================================

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}