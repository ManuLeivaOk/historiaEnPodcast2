"use client";
import React, { useRef } from "react";
import { Stepper } from "primereact/stepper";
import { StepperPanel } from "primereact/stepperpanel";
import { Button } from "primereact/button";

export default function Step() {
  const stepperRef = useRef<any>(null);

  const goToNextStep = () => {
    if (stepperRef.current) {
      stepperRef.current.nextCallback();
    }
  };

  const goToPreviousStep = () => {
    if (stepperRef.current) {
      stepperRef.current.prevCallback();
    }
  };

  return (
    <div className="card flex justify-content-center px-4 md:px-8">
      <Stepper ref={stepperRef}>
        <StepperPanel header="Paso I">
          <div className="flex flex-column h-10rem">
            <div className="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium text-center">
              Hacé click en COMPRAR y pagá <br></br> por MercadoPago
            </div>
          </div>
          <div className="flex pt-4 justify-content-end">
            <Button
              label="Siguiente"
              icon="pi pi-arrow-right"
              iconPos="right"
              onClick={goToNextStep}
            />
          </div>
        </StepperPanel>
        <StepperPanel header="Paso II">
          <div className="flex flex-column h-10rem">
            <div className="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium text-center">
              Esperá a que la página te redirija <br></br> al FORMULARIO DE
              COMPRA
            </div>
          </div>
          <div className="flex pt-4 justify-content-between">
            <Button
              label="Anterior"
              severity="secondary"
              icon="pi pi-arrow-left"
              onClick={goToPreviousStep}
            />
            <Button
              label="Siguiente"
              icon="pi pi-arrow-right"
              iconPos="right"
              onClick={goToNextStep}
            />
          </div>
        </StepperPanel>
        <StepperPanel header="Paso III">
          <div className="flex flex-column h-10rem">
            <div className="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium text-center">
              Completá el FORMULARIO y ¡LISTO! <br></br> Ya compraste NUESTROS
              LIBROS
            </div>
          </div>
          <div className="flex pt-4 justify-content-start">
            <Button
              label="Anterior"
              severity="secondary"
              icon="pi pi-arrow-left"
              onClick={goToPreviousStep}
            />
          </div>
        </StepperPanel>
      </Stepper>
    </div>
  );
}
