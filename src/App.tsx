import {
  Anchor,
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Footer,
  Grommet,
  Header,
  Heading,
  Main,
  Menu,
  Text,
} from 'grommet';
import { Grow, Instagram, Linkedin, Menu as MenuIcon, Twitter } from 'grommet-icons';

function App() {
  return (
    <Grommet>
      <Header background="white" pad={{
        horizontal: "large",
        vertical: "small",
      }}>
        <Anchor
          href="#main"
          icon={<Grow size="26px" color="brand" />}
          label={"Marianna Carneiro"}
        />
        <Box
          align="center"
          as="header"
          direction="row"
          flex={false}
          justify="between"
          gap="medium"
        />
        <Menu
          dropProps={{ align: { top: 'bottom', right: 'right' } }}
          icon={<MenuIcon color="brand" />}
          items={[{ label: 'account' }, { label: 'logout' }]}
        />
      </Header>

      <Main pad="large">
        <Card
          height="small"
          width="small"
          fill
          background="brand"
          pad="medium">
          <CardHeader pad="medium" >
            <Text size="xlarge" weight="bold" > Building a website with Typescript, ReactJS and Grommet
            </Text>

          </CardHeader>
          <CardBody pad="medium" gap="medium">
            <Text>A little bit about the tools:</Text>
            <Heading size="18px">Typescript</Heading>
            <Text> TypeScript is a superset of JavaScript, that is, a set of tools and more efficient ways to write JavaScript code, adding features that are not natively present in the language.
            </Text>
            <Heading size="18px">React</Heading>
            <Text>React is "a declarative, efficient and flexible JavaScript library for creating user interfaces (UI)"
            </Text>
            <Heading size="18px">Grommet</Heading>

            <Text>Grommet is a React-based library that provides an end-to-end solution for building user interfaces with a minimalistic look and feel. It provides a high level of customization along with responsiveness without compromising accessibility.
            </Text>
          </CardBody>
        </Card>
      </Main>


      <Footer background="white" pad={{
        horizontal: "large",
        vertical: "small",
      }}
        justify="center"
      ><Button
        icon={<Twitter size="18px" color="brand" />}></Button>
        <Button
          icon={<Instagram size="18px" color="brand" />}></Button>
        <Button
          icon={<Linkedin size="18px" color="brand" />}></Button>
      </Footer>
    </Grommet>
  );
}

export default App;
