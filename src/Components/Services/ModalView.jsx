import React from 'react'

function ModalView() {
    return (
        <Modal size="lg" isOpen={modal} toggle={() => setModal(!modal)}>
          {services.map((i, index) => (
        
            <>
              <ModalHeader key={index} toggle={() => setModal(!modal)}>
                  
                    {i.description}
              </ModalHeader>
            </>
            
          ))}
        </Modal>
      );
}

export default ModalView