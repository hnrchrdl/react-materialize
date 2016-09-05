import React, { PropTypes } from 'react';
import Overlay from './Overlay';
import idgen from './idgen';

class OverlayTrigger extends Overlay {
  constructor (props) {
    super(props);
    this.showOverlay = this.showOverlay.bind(this);
    this.renderOverlay = this.renderOverlay.bind(this);
    this.overlayID = `overlay_${idgen()}`;
  }

  render () {
    const child = React.Children.only(this.props.children);

    return React.cloneElement(
      child, {
        onClick: this.showOverlay
      }
    );
  }

  renderOverlay () {
    return React.cloneElement(this.props.overlay, {
      id: this.overlayID
    });
  }

  showOverlay () {
    $(`#${this.overlayID}`).openModal(this.props.modalOptions);
  }
}

OverlayTrigger.propTypes = {
  modalOptions: PropTypes.object,
  overlay: PropTypes.node
};

export default OverlayTrigger;
