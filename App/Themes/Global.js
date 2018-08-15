import styled from "styled-components/native";
import { Colors, Padding, Height } from "./Theme.js";

// Wrappers
const ScreenWrapper = styled.View`
  flex: 1;
  background-color: ${Colors.Background};
  padding-top: ${props => (props.StatusBarPadding ? Height.Status : 0)};
`;
const ScrollWrapper = styled.ScrollView`
  flex: 1;
  background-color: ${Colors.Background};
  padding-top: ${props => (props.StatusBarPadding ? Height.Status : 0)};
`;
const KeyboardAvoidWrapper = styled.KeyboardAvoidingView`
  flex: 1;
  background-color: ${Colors.Background};
  padding-top: ${props => (props.StatusBarPadding ? Height.Status : 0)};
`;
const VerticleWrapper = styled.KeyboardAvoidingView`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  background-color: #e5e5e5;
  align-items: center;
`;

// Typography
const H1 = styled.Text`
  color: ${Colors.Heading};
  font-size: 24;
  letter-spacing: 0.4;
  font-weight: 900;
`;
const H2 = styled.Text`
  color: ${Colors.Heading};
  font-size: 22;
  font-weight: 700;
  line-height: 24;
`;
const H3 = styled.Text`
  color: ${Colors.Heading};
  font-size: 20;
  font-weight: 800;
  line-height: 26;
`;
const H4 = styled.Text`
  color: ${Colors.Heading};
  font-size: 18;
  font-weight: 600;
  letter-spacing: 0.5;
  line-height: 20;
  padding-left: ${props => (props.paddingLeft ? props.paddingLeft : 0)};
`;
const MetaData = styled.Text`
  color: ${Colors.Paragraph};
  font-size: 18;
  font-weight: 300;
  letter-spacing: 0.5;
  line-height: 21;
  padding-right: 20;
  padding-left: 20;
  padding-bottom: 16;
  align-items: center;
`;
const H5 = styled.Text`
  color: ${Colors.Heading};
  font-size: 14;
  font-weight: 500;
  letter-spacing: 0.5;
  line-height: 20;
`;
const H6 = styled.Text`
  color: ${Colors.Heading};
  font-size: 12;
  font-weight: 300;
  line-height: 14;
  letter-spacing: 1;
`;
const Paragraph = styled.Text`
  color: ${Colors.Paragraph};
  font-size: 14;
  font-weight: 300;
  letter-spacing: 0.3;
  line-height: 21;
`;

const ParagraphMedium = styled.Text`
  color: ${Colors.Paragraph};
  font-size: 13;
  font-weight: ${props => (props.bold ? "900" : "600")};
  letter-spacing: 0.3;
  line-height: 17;
`;

const ParagraphSmall = styled.Text`
  color: ${Colors.Paragraph};
  font-size: 10;
  font-weight: 400;
  letter-spacing: 0.3;
  line-height: 12;
`;

// Form Spacer
const InputSpacer = styled.View`
  margin-bottom: 10;
`;
const LargeInputSpacer = styled.View`
  margin-bottom: 15;
`;

const ButtonSpacer = styled.View`
  margin-top: 10;
`;

// Padders
const ScreenPadder = styled.View`
  flex: 1;
  padding-left: ${Padding.ScreenLeft};
  padding-right: ${Padding.ScreenRight};
`;
const ScreenPadderSmall = styled.View`
  padding-left: ${Padding.Small};
  padding-right: ${Padding.ScreenRightSmall};
`;
const Padder = styled.View`
  padding-top: ${props => (props.paddingTop ? props.paddingTop : 0)};
  padding-bottom: ${props => (props.paddingBottom ? props.paddingBottom : 0)};
  padding-left: ${props => (props.paddingLeft ? props.paddingLeft : 0)};
  padding-right: ${props => (props.paddingRight ? props.paddingRight : 0)};
`;

const ListItem = styled.View`
  flex-direction: row;
  justify-content: ${props => (props.block ? "space-between" : "flex-start")};
  padding-left: ${props => (props.paddingLeft ? props.paddingLeft : 0)};
  padding-right: ${props => (props.paddingRight ? props.paddingRight : 0)};
  padding-top: ${props => (props.paddingTop ? props.paddingTop : 0)};
  padding-bottom: ${props => (props.paddingBottom ? props.paddingBottom : 0)};
  background: #fff;
  margin-top: ${props => (props.marginTop ? props.marginTop : 0)};
  margin-bottom: ${props => (props.marginBottom ? props.marginBottom : 0)};
`;

const ListWrapper = styled.View`
  flex-direction: column;
  background: #fff;
`;

export {
  ScreenWrapper,
  ScrollWrapper,
  KeyboardAvoidWrapper,
  VerticleWrapper,
  InputSpacer,
  LargeInputSpacer,
  ButtonSpacer,
  Padder,
  ScreenPadder,
  ScreenPadderSmall,
  H1,
  H2,
  H3,
  H4,
  MetaData,
  H5,
  H6,
  Paragraph,
  ParagraphMedium,
  ParagraphSmall,
  ListItem,
  ListWrapper
};
