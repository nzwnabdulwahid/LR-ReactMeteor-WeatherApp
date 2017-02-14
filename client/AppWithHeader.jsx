import React from 'react';
import ReactDOM from 'react-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container } from 'reactstrap';


export const AppHeaderLayout = ({content}) => (
	<div className="main-layout">	
    
	  <div>
	    <Navbar color="faded" light toggleable>
	      
	      <NavbarBrand href="/"></NavbarBrand>
	      <Collapse navbar>
	        <Nav className="ml-auto" navbar>
	          
	          <NavItem>
	            <NavLink href="/user">Hi {}</NavLink>
	          </NavItem>


	          <NavItem>
	            <NavLink href="/logout">Logout</NavLink>
	          </NavItem>
	        </Nav>
	      </Collapse>
	    </Navbar>
	  </div>
    
		<main>
			<Container>
				{content}
			</Container>
			
		</main>
		
		
	</div>

)

