import React , { useContext } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { ContextForUserInfo } from 'src/App'

const Register = () => {

  const userInfoContext = useContext(ContextForUserInfo);
  // if(userInfoContext[0][0] === true){
  //   document.getElementById('username-field').innerText=userInfoContext[3][0];
  //   document.getElementById('username-field').value=userInfoContext[3][0];
  // }
  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="9" lg="7" xl="6">
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm>
                  <h1>Register</h1>
                  <p className="text-muted">Create your account</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-user" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    {
                      userInfoContext[0][0] === true ? 
                        <CInput type="text" placeholder="Username" autoComplete={userInfoContext[1][0]} value={userInfoContext[1][0]} id="username-field"/>  
                      :
                        <CInput type="text" placeholder="Username" autoComplete="username" id="username-field"/>
                    }
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>@</CInputGroupText>
                    </CInputGroupPrepend>
                    {
                      userInfoContext[0][0] === true ? 
                        <CInput type="text" placeholder="Email" autoComplete={userInfoContext[3][0]} value={userInfoContext[3][0]} id="email-field"/>
                      :
                        <CInput type="text" placeholder="Email" autoComplete="email" id="email-field"/>
                    }
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-lock-locked" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    {
                      userInfoContext[0][0] === true ? 
                        <CInput type="password" placeholder="Password" autoComplete={userInfoContext[4][0]} value={userInfoContext[4][0]} id="new-password-field"/>
                      :
                        <CInput type="password" placeholder="Password" autoComplete="new-password" id="new-password-field"/>
                    }
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-lock-locked" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="password" placeholder="Repeat password" autoComplete="new-password" id="repeat-new-password-field"/>
                  </CInputGroup>
                  <CButton color="success" block>Create Account</CButton>
                </CForm>
              </CCardBody>
              <CCardFooter className="p-4">
                <CRow>
                  <CCol xs="12" sm="6">
                    <CButton className="btn-facebook mb-1" block><span>facebook</span></CButton>
                  </CCol>
                  <CCol xs="12" sm="6">
                    <CButton className="btn-twitter mb-1" block><span>twitter</span></CButton>
                  </CCol>
                </CRow>
              </CCardFooter>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Register
