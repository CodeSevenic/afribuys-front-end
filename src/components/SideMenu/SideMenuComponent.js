import React from 'react';
import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

export function DropdownMenu(props) {
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);

  function calcHeight(el) {
    const height = el.offsetHeight;
    console.log(height);
    setMenuHeight(height);
  }

  function DropdownItem(props) {
    return (
      <li>
        <a
          href={props.href}
          className="menu-item"
          onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
        >
          <span className="icon-button">{props.leftIcon}</span>
          {props.children}
          <span className="icon-right">{props.rightIcon}</span>
        </a>
      </li>
    );
  }

  return (
    <div className="dyn_dropdown" style={{ height: menuHeight }}>
      <CSSTransition
        in={activeMenu === 'main'}
        unmountOnExit
        timeout={500}
        classNames="menu-primary"
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem>{props.Category}</DropdownItem>
          <DropdownItem goToMenu="settings">
            {props.start_navigate}
          </DropdownItem>
        </div>
      </CSSTransition>
      {/* ///////////////////////////////// */}
      <CSSTransition
        in={activeMenu === 'settings'}
        unmountOnExit
        timeout={500}
        classNames="menu-secondary"
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem goToMenu="main">{props.target_navigate}</DropdownItem>
          <DropdownItem>{props.item}</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}
