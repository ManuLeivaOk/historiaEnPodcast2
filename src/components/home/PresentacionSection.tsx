import React from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Divider } from "primereact/divider";
import { Panel } from "primereact/panel";
import { Avatar } from "primereact/avatar";

const CustomPanelHeader = ({ title, imageSrc }: any) => {
  return (
    <div className="custom-panel-header">
      <Avatar
        image={imageSrc}
        size="xlarge"
        shape="circle"
        className="custom-avatar"
      />
      <h3 className="custom-panel-title">{title}</h3>
    </div>
  );
};

const PresentacionSection = () => {
  return (
    <div className="presentation-container flex-column md:flex-row justify-content-center align-items-center py-8">
      {/* Card del Podcast */}
      <div className="presentation-card">
        <Card
          title="Historia en Podcast"
          subTitle="Por Lucas Botta"
          className="custom-card"
        >
          <p>
            Podcast dedicado a la divulgación de los principales eventos y
            procesos de la historia de la humanidad, aptos para todo público.
          </p>
          <p>
            Dictados por el Profesor y Licenciado en Historia Lucas Botta, desde
            Córdoba (Arg.)
          </p>
          <Button
            label="Escuchar Podcast"
            className="p-button-rounded p-button-outlined custom-button"
          />
        </Card>
      </div>

      {/* Divider entre secciones */}
      <div className="presentation-divider hidden md:block">
        <Divider layout="vertical" className="custom-divider" />
      </div>

      <div className="presentation-divider block md:hidden">
        <Divider className="custom-divider-horizontal"/>
      </div>

      {/* Card de Información Personal */}

      <div className="presentation-card">
        <Panel
          header={
            <CustomPanelHeader
              title="Sobre Lucas Botta"
              imageSrc="/LucasBotta.jpg"
            />
          }
          className="custom-panel"
        >
          <p>
            Lucas Botta es el creador de Historia en Podcast. Profesor y
            Licenciado en Historia por la Universidad Nacional de Córdoba.
          </p>
          <p>
            Actualmente es docente en Nivel Secundario, director de Historia en
            Podcast y escritor de Editorial Planeta.
          </p>
          <Button
            label="Leer más"
            className="p-button-rounded p-button-outlined custom-button"
          />
        </Panel>
      </div>
    </div>
  );
};

export default PresentacionSection;
