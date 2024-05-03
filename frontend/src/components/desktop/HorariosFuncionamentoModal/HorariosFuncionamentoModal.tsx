import React, { ReactNode, useState } from 'react';
import { Backdrop, ButtonsContainer, Container, ContainerTitle, CheckboxContainer, CheckboxItem, CheckboxLabel, DropdownContainer, DropdownsContainer, ToggleSwitchContainer, ToggleSwitch, Text, CloseButton, InnerContainer,InnerSeparator, ModalContent, } from './styles';
import { CustomButton } from '../../common/CustomButton/CustomButton';
import {theme} from '../../../styles/theme';

interface HorariosModalProps {
    isOpen?: boolean;
    onClose: () => void;
    openModal?: () => void;
}

const HorariosFuncionamentoModal: React.FC<HorariosModalProps> = ({
    isOpen, onClose, openModal
}) => {
    const horarios = ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'];
    const [fechadoParaAlmoco, setFechadoParaAlmoco] = useState(false);
    const [horarioEspecialFinsDeSemana, setHorarioEspecialFinsDeSemana] = useState(false);

    if (!isOpen) return null;

    return (
        <Backdrop onClick={onClose}>
            <ModalContent onClick={e => e.stopPropagation()}>
                <Container>
                    <ContainerTitle>{"Horários de Funcionamento"}</ContainerTitle>
                    <CloseButton onClick={onClose}>x</CloseButton>
                    <InnerSeparator></InnerSeparator>
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
                    <ButtonsContainer>
                        <CustomButton buttonText="Editar Horários" buttonHeight={40} buttonWidth={140} textSize={16}></CustomButton>
                        <CustomButton buttonText="Cancelar" buttonHeight={40} buttonWidth={140} textSize={16} buttonColor={theme.COLORS.DISABLED_COLOR} onClick={onClose}></CustomButton>
                    </ButtonsContainer>
                </Container>
            </ModalContent>
        </Backdrop>
    );
}

export {HorariosFuncionamentoModal}