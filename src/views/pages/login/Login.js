import React from 'react';
import { Link } from 'react-router-dom';
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react';
import './Login.css';
import CIcon from '@coreui/icons-react';

const Login = () => {

  let togglerSwitchCount=0;

  const togglerClicked = () => {
    togglerSwitchCount=(togglerSwitchCount+1)%2;
    if(togglerSwitchCount){
      document.getElementById('text-Personal').style.color="gray";
      document.getElementById('text-Company').style.color="#321fdb";
      document.getElementById('dummy').style.display="inline-block";
    }
    else{
      document.getElementById('text-Personal').style.color="#321fdb";
      document.getElementById('text-Company').style.color="gray";
      document.getElementById('dummy').style.display="none";
    }
  }

  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Login</h1>
                    <div className="muted-text-and-toggler-div">
                      <div className="muted-text-on-left">
                        <p className="text-muted">Sign In to your account</p>
                      </div>
                      <div className="toggler-on-right">
                        <div className="toggler-switch">
                          <p className="text-toggler" id="text-Personal">Personal</p>
                          <label className="switch">
                            <input type="checkbox"/>
                            <span className="slider"  id="switch-btn" onClick={()=>togglerClicked()}/>
                          </label>
                          <p className="text-toggler" id="text-Company">Company</p>
                        </div>
                      </div>
                    </div>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="text" placeholder="Name" autoComplete="name" id="input-name"/>
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          {/* <CIcon name="cil-card-travel" /> */}
                          <img src="https://image.flaticon.com/icons/png/512/639/639394.png" alt="" className="briefcase-icon" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="text" placeholder="Job" autoComplete="job" id="input-job"/>
                    </CInputGroup>
                    <div id="dummy">
                      <CInputGroup className="mb-4 dummy-class">
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <CIcon name="cil-lock-locked" />
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput type="text" placeholder="Dummy" autoComplete="dummy" id="input-dummy"/>
                      </CInputGroup>
                    </div>
                    
                    <CRow>
                      <CCol xs="6">
                        <CButton color="primary" className="px-4">Login</CButton>
                      </CCol>
                      <CCol xs="6" className="text-right">
                        <CButton color="link" className="px-0">Forgot password?</CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua.</p>
                    <Link to="/register">
                      <CButton color="primary" className="mt-3" active tabIndex={-1}>Register Now!</CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
