import Button from "../../components/Button";
import Card from "../../components/Card";
import Header from "../../components/Header";
import Input from "../../components/Input";
import Statement from "./Statement";
import { BodyContainer, DashboardBackground, InlineContainer, InlineTitle } from "./styles";

const Dashboard = () => {
    const wallet = 5000;

    return (
        <DashboardBackground>
            <Header />
            <BodyContainer>
                <div>
                    <Card noShadow width="90%">
                        <InlineTitle>
                            <h2 className="h2">Saldo atual</h2>
                        </InlineTitle>
                        <InlineTitle>
                            <h3 className="wallet">
                                {wallet.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}
                            </h3>
                        </InlineTitle>
                    </Card>
                    <Card noShadow width="90%">
                        <InlineTitle>
                            <h2 className="h2">Receber PIX</h2>
                        </InlineTitle>
                        <InlineContainer>
                            <Input style={{flex: 1}} placeholder="Valor" />
                            <Button>Gerar código</Button>
                        </InlineContainer>

                        <p className="primary-color">Pix copia e cola</p>
                        <p className="primary-color">iaosnhdiaklniemdfjodaknsdhpos</p>
                    </Card>
                    <Card noShadow width="90%">
                        <InlineTitle>
                            <h2 className="h2">Pagar PIX</h2>
                        </InlineTitle>
                        <InlineContainer>
                            <Input style={{flex: 1}} placeholder="Insira a chave" />
                            <Button>Pagar PIX</Button>
                        </InlineContainer>
                    </Card>
                </div>
                <div>
                    <Card noShadow width="90%">
                        <InlineTitle>
                            <h2 className="h2">Estrato da conta</h2>
                        </InlineTitle>
                        <Statement />
                    </Card>
                </div>
            </BodyContainer>
        </DashboardBackground>
    );
}

export default Dashboard;