import React from 'react';
import { useTranslation } from 'react-i18next';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import '../css/Footer.css';

function Footer() {
    const { t } = useTranslation();
    const handleButtonClick = () => {
        window.location.href = 'https://wa.me/523143526003';
    };

    return (
        <>
            <MDBFooter style={{ backgroundColor: '#0A1547', color: 'white' }} className='text-center text-lg-start text-muted'>
                <section style={{ color: 'white' }} className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                    <div className='me-5 d-none d-lg-block'>
                        <span>{t('Buscanos en todas nuestras redes sociales')}:</span>
                    </div>

                    <div>
                        <a href='https://www.facebook.com/visasmanzanillo?mibextid=dGKdO6' className='me-4 text-reset'>
                            <MDBIcon fab icon="facebook-f" />
                        </a>
                        <a href='' className='me-4 text-reset'>
                            <MDBIcon fab icon="google" />
                        </a>
                        <a href='https://www.instagram.com/fastpass_visa/' className='me-4 text-reset'>
                            <MDBIcon fab icon="instagram" />
                        </a>
                        <a href='https://wa.me/523143526003' className='me-4 text-reset'>
                            <MDBIcon fab icon="whatsapp" />
                        </a>
                    </div>
                </section>

                <section style={{ color: 'white' }} className=''>
                    <MDBContainer className='text-center text-md-start mt-5'>
                        <MDBRow className='mt-3'>
                            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>
                                    <MDBIcon icon="passport" className="me-3" />
                                    Fast Pass Visas
                                </h6>
                                <p>{t('Consultoria en trámites de visas y pasaportes')}</p>
                                <button onClick={handleButtonClick} className='appointment-button'>
                                    <MDBIcon fas icon="calendar-check" className='me-2' />
                                    {t('Quiero cita')}
                                </button>
                            </MDBCol>

                            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>{t('Menu')}</h6>
                                <p>
                                    <a href='/' className='text-reset'>
                                        {t('Inicio')}
                                    </a>
                                </p>
                                <p>
                                    <a href='/about' className='text-reset'>
                                        {t('¿Quienes Somos?')}
                                    </a>
                                </p>
                                <p>
                                    <a href='/services' className='text-reset'>
                                        {t('Servicios')}
                                    </a>
                                </p>
                                <p>
                                    <a href='/faq' className='text-reset'>
                                        {t('Preguntas Frecuentes')}
                                    </a>
                                </p>
                                <p>
                                    <a href='/contact' className='text-reset'>
                                        {t('Contacto')}
                                    </a>
                                </p>
                            </MDBCol>

                            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>{t('Politicas')}</h6>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        {t('Politicas de la Empresa')}
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        {t('Politicas de Privacidad')}
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        {t('Aviso de Privacidad')}
                                    </a>
                                </p>
                            </MDBCol>

                            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>{t('Contacto')}</h6>
                                <p>
                                    <a href="https://maps.app.goo.gl/tostpFRhyjGWeZLr6">
                                        <MDBIcon icon="home" className="me-2" />
                                        Av. Paseo de las Garzas #274, Local 13 (Segundo piso), Barrio 5, Valle de las Garzas C.P. 28219 Manzanillo, Colima
                                    </a>
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
                                        + 52 314 688 5645
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