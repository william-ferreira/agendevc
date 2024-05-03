import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {Container, InnerContainer, CheckboxContainer, CheckboxItem, CheckboxLabel, DropdownContainer, DropdownsContainer, ContainerTitle, ToggleSwitch, ToggleSwitchContainer, ButtonContainer, Text, InnerSeparator} from './styles';
import { CustomButton } from '../../common/CustomButton/CustomButton';
import { ProgressBar } from '../ProgressBar/ProgressBar';

const HorariosFuncionamento: React.FC = () => {
    const horarios = ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'];
    const [fechadoParaAlmoco, setFechadoParaAlmoco] = useState(false);
    const [horarioEspecialFinsDeSemana, setHorarioEspecialFinsDeSemana] = useState(false);

    return (
        <Container>
            <ContainerTitle>{"Horários de Funcionamento"}</ContainerTitle>
            <ProgressBar porcentagem={50}></ProgressBar>
            <InnerContainer>
                <div style={{marginBottom: 5}}>
                    <ToggleSwitchContainer>
                        <Text>Fechado para almoço?</Text>
                        <ToggleSwitch
                            checked={fechadoParaAlmoco}
                            onChange={() => setFechadoParaAlmoco(!fechadoParaAlmoco)}
                        />
                    </ToggleSwitchContainer>
                    <ToggleSwitchContainer>
                        <Text>Horário especial nos fins de semana?</Text>
                        <ToggleSwitch
                            checked={horarioEspecialFinsDeSemana}
                            onChange={() => setHorarioEspecialFinsDeSemana(!horarioEspecialFinsDeSemana)}
                        />
                    </ToggleSwitchContainer>
                </div>
                <InnerSeparator></InnerSeparator>
                <Text>Marque os dias de funcionamento do seu negócio:</Text>
                <div>
                <CheckboxContainer>
                    <CheckboxItem>
                        <CheckboxLabel>Dom</CheckboxLabel>
                        <input type="checkbox" />
                    </CheckboxItem>
                    <CheckboxItem>
                        <CheckboxLabel>Seg</CheckboxLabel>
                        <input type="checkbox" />
                    </CheckboxItem>
                    <CheckboxItem>
                        <CheckboxLabel>Ter</CheckboxLabel>
                        <input type="checkbox" />
                    </CheckboxItem>
                    <CheckboxItem>
                        <CheckboxLabel>Qua</CheckboxLabel>
                        <input type="checkbox" />
                    </CheckboxItem>
                    <CheckboxItem>
                        <CheckboxLabel>Qui</CheckboxLabel>
                        <input type="checkbox" />
                    </CheckboxItem>
                    <CheckboxItem>
                        <CheckboxLabel>Sex</CheckboxLabel>
                        <input type="checkbox" />
                    </CheckboxItem>
                    <CheckboxItem>
                        <CheckboxLabel>Sáb</CheckboxLabel>
                        <input type="checkbox" />
                    </CheckboxItem>
                </CheckboxContainer>
                </div>
            <InnerSeparator></InnerSeparator>
            </InnerContainer>
            <DropdownsContainer>            
                <Text>Selecione os horários de funcionamento:</Text>
                <DropdownContainer>
                    <select>
                        <option disabled selected hidden>Abre</option>
                        {horarios.map(horario => (
                            <option key={horario} value={horario}>
                                {horario}
                            </option>
                        ))}
                    </select>
                    <select>
                        <option disabled selected hidden>Fecha</option>
                        {horarios.map(horario => (
                            <option key={horario} value={horario}>
                                {horario}
                            </option>
                        ))}
                    </select>
                    {fechadoParaAlmoco && (
                        <>
                        <select>
                            <option disabled selected hidden>Abre</option>
                            {horarios.map(horario => (
                                <option key={horario} value={horario}>
                                    {horario}
                                </option>
                            ))}
                        </select>
                        <select>
                            <option disabled selected hidden>Fecha</option>
                            {horarios.map(horario => (
                                <option key={horario} value={horario}>
                                    {horario}
                                </option>
                            ))}
                        </select>
                        </>
                    )}
                </DropdownContainer>
                {horarioEspecialFinsDeSemana && (
                    <>
                    <div>
                    <Text>Selecione os horários de funcionamento em finais de semana:</Text>                                            
                        <DropdownContainer>
                            <select>
                                <option disabled selected hidden>Abre</option>
                                {horarios.map(horario => (
                                    <option key={horario} value={horario}>
                                        {horario}
                                    </option>
                                ))}
                            </select>
                            <select>
                                <option disabled selected hidden>Fecha</option>
                                {horarios.map(horario => (
                                    <option key={horario} value={horario}>
                                        {horario}
                                    </option>
                                ))}
                            </select>
                            {fechadoParaAlmoco && (
                                <>
                                <select>
                                    <option disabled selected hidden>Abre</option>
                                    {horarios.map(horario => (
                                        <option key={horario} value={horario}>
                                            {horario}
                                        </option>
                                    ))}
                                </select>
                                <select>
                                    <option disabled selected hidden>Fecha</option>
                                    {horarios.map(horario => (
                                        <option key={horario} value={horario}>
                                            {horario}
                                        </option>
                                    ))}
                                </select>
                                </>
                            )}
                        </DropdownContainer>
                    </div>
                    </>
                )}
            </DropdownsContainer>
            <ButtonContainer>
                <Link to="/cadastroFormasPg">
                    <CustomButton buttonText={"Próximo"} buttonWidth={300}></CustomButton>
                </Link>
            </ButtonContainer>
        </Container>
      );
};

export {HorariosFuncionamento};