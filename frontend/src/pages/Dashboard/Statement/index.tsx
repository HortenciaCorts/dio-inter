import { StatementContainer, StatementItemContainer, StatementItemImage, StatementItemInfo } from "./styles";
import { format } from 'date-fns';
import { FiDollarSign } from 'react-icons/fi'

interface IStatementItem {
    user: {
        firstName: string,
        lastName: string
    },
    value: number,
    type: 'paid' | 'received',
    updatedAt: Date
}

const StatementItem = ({user, value, type, updatedAt}: IStatementItem) => {
    return(
        <StatementItemContainer>
            <StatementItemImage type={type}>
                <FiDollarSign size={24} />
            </StatementItemImage>
            <StatementItemInfo>
                <p className="primary-color">
                    {value.toLocaleString(
                        'pt-br', {style: 'currency', currency: 'BRL'}
                    )}
                </p>
                <p>{type === 'paid' ? 'Pago a ' : 'Recebido de '} 
                    <strong>{user.firstName} {user.lastName}</strong>
                </p>
                <p>{format(updatedAt, "dd/mm/yyyy 'às' HH:mm:'h'")}</p>
            </StatementItemInfo>
        </StatementItemContainer>
    );
}

const Statement = () => {
    const statements: IStatementItem[] = [
        {
            user: {
                firstName: 'Hortência',
                lastName: 'Côrtes'
            },
            value: 250.00,
            type: 'paid',
            updatedAt: new Date()
        },
        {
            user: {
                firstName: 'Maria',
                lastName: 'Souza'
            },
            value: 270.00,
            type: 'received',
            updatedAt: new Date()
        }
    ]
    return(
        <StatementContainer>
            {statements.map(statement => <StatementItem {...statement} />)}
        </StatementContainer>
    );
}

export default Statement;