import React from 'react';
import { useTranslation } from 'react-i18next';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import '../css/Footer.css';
import Logo from '/logoPeque.webp';

function Footer() {
    const { t } = useTranslation();

    return (
        <>
            <MDBFooter style={{ backgroundColor: '#0A1547', color: 'white' }} className='text-center text-lg-start text-muted'>
                <section style={{ color: 'white' }} className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                    <div className='me-5 d-none d-lg-block'>
                        <span>{t('Síguenos en nuestras redes sociales: ')}</span>
                    </div>

                    <div>
                        <a href='https://www.facebook.com/visasmanzanillo?mibextid=dGKdO6' className='me-4 text-reset'>
                            <MDBIcon fab icon="facebook-f" />
                        </a>
                        <a href='https://www.instagram.com/fastpass_visa/' className='me-4 text-reset'>
                            <MDBIcon fab icon="instagram" />
                        </a>
                    </div>
                </section>

                <section style={{ color: 'white' }} className=''>
                    <MDBContainer className='text-center text-md-start mt-5'>
                        <MDBRow className='mt-3'>
                            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>
                                    <MDBIcon icon="passport" className="me-3" />
                                    Fast Pass Visas
                                </h6>
                                <p>{t('Empresa dedicada a la asesoría, gestión y trámite de pasaportes y visas')}</p>
                                <a href='https://www.paypal.com/mx/home' className='btnPay'>
                                    <div className='Pagos'>
                                        <div className='btn-paypal'>
                                            <MDBIcon fas icon='calendar-alt' />
                                        </div>
                                        <p>Agendar Cita</p>
                                    </div>
                                </a>
                            </MDBCol>

                            {/* <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>{t('Menú')}</h6>
                                <p>
                                    <a href='/' className='text-reset'>
                                        {t('Inicio')}
                                    </a>
                                </p>
                                <p>
                                    <a href='/about' className='text-reset'>
                                        {t('¿Quiénes Somos?')}
                                    </a>
                                </p>
                                <p>
                                    <a href='/services' className='text-reset'>
                                        {t('Nuestros servicios')}
                                    </a>
                                </p>
                                <p>
                                    <a href='/faq' className='text-reset'>
                                        {t('FAQ')}
                                    </a>
                                </p>
                                <p>
                                    <a href='/contact' className='text-reset'>
                                        {t('Contacto')}
                                    </a>
                                </p>
                            </MDBCol> */}

                            

                            <MDBCol md="3" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>{t('Contacto')}</h6>
                                <p>
                                    <a href="https://maps.app.goo.gl/tostpFRhyjGWeZLr6">
                                        <MDBIcon icon="home" className="me-3" />
                                        Av. Paseo de las Garzas #274, Local 13 (planta alta), Barrio 5, Valle de las Garzas C.P. 28219 Manzanillo, Colima                                    </a>
                                </p>
                                <p>
                                    <a href="mailto:info@fastpass-visas.com">
                                        <MDBIcon icon="envelope" className="me-3" />
                                        info@fastpass-visas.com
                                    </a>
                                </p>
                                <p>
                                    <a href="tel:+523146885645">
                                        <MDBIcon icon="phone" className="me-3" />
                                        +52 314 688 5645
                                    </a>
                                </p>
                            </MDBCol>

                            <MDBCol md="2" lg="2" xl="2" className='mx-auto  mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>{t('Horario')}</h6>
                                <p>Lun-Mar: 9 a.m. - 7 p.m.</p>
                                <p>Mié-Jue: 2 p.m. - 7 p.m.</p>
                                <p>Vie: 9 a.m. - 2 p.m.</p>
                                <p>Sáb: 9 a.m. - 2 p.m.</p>
                                <p>Dom: Cerrado</p>
                            </MDBCol>

                            <MDBCol md="3" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>{t('Políticas')}</h6>
                                <p className='politicas'>
                                    <a href='/tyc' className='text-reset'>
                                        {t('Términos y Condiciones de Uso')}
                                    </a>
                                </p>
                                <p className='politicas'>
                                    <a href='/politica-de-privacidad' className='text-reset'>
                                        {t('Políticas de Privacidad')}
                                    </a>
                                </p>
                                <p className='politicas'>
                                    <a href='/aviso-de-privacidad' className='text-reset'>
                                        {t('Aviso de Privacidad')}
                                    </a>
                                </p>
                                <p className='politicas'>
                                    <a href='/politica-de-devolucion' className='text-reset'>
                                        {t('Política de Devoluciones y Reembolsos')}
                                    </a>
                                </p>
                                <p className='politicas'>
                                    <a href='/aviso-legal' className='text-reset'>
                                        {t('Aviso Legal')}
                                    </a>
                                </p>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </section>

                <div className='text-center p-4 border-top' style={{ color: 'white' }}>
                    © 2024 Copyright | FastPass Visas
                </div>
            </MDBFooter>
        </>
    );
}

export default Footer;
