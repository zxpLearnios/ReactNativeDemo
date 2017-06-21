/**
 * Created by jingnanzhang on 2017/6/7.
 */
// 退键盘的scroller，drag时也会退键盘



export  default class  KeyboardAvoidScroller extends  Component {


    render(){

        return (
            <ScrollView
                keyboardDismissMode='on-drag'
                style={styles.scroller}
            >
                <View style={styles.contentView}>
                    <TouchableOpacity activeOpacity={1.0} onPress={this.dismissKeyboardClick.bind(this)} />


                    <KeyboardAvoidingView
                        behavior = {this.keyboardState.behavior}
                        keyboardVerticalOffset = {this.keyboardState.keyboardVerticalOffset}>

                        {/*头部*/}
                        <View style={styles.topView}>



                            {/*手机号*/}
                            <View style={styles.phoneView}>
                                <Text  style={styles.phoneText} >手机号</Text>

                                <TextInput

                                    placeholder={this.constGlobal.phoneHint}
                                    keyboardType={this.phoneInputState.keyboardType}
                                    maxLength={this.phoneInputState.maxLength}
                                    clearButtonMode={this.phoneInputState.clearButtonMode}
                                    style={styles.phoneInput}
                                    onChangeText={phone => this.handlePhoneFieldChange(phone)}
                                />
                            </View>

                            {/*验证码*/}
                            <View style={styles.verCodeView}>
                                <Text title="验证码" style={styles.verCodeText}>验证码</Text>
                                <TextInput
                                    placeholder={this.constGlobal.verCodeHint}
                                    keyboardType={this.phoneInputState.keyboardType}
                                    maxLength={6}
                                    clearButtonMode={this.phoneInputState.clearButtonMode}
                                    style={styles.verCodeInput}
                                    onChangeText={verCode => this.handleVerCodeFieldChange(verCode)}
                                />
                            </View>

                            {/*密码*/}
                            <View style={styles.pwdView}>
                                <Text text="密码" style={styles.pwdText}>密码</Text>
                                <TextInput
                                    placeholder={this.constGlobal.pwdHint}
                                    keyboardType={this.pwdInputState.keyboardType}
                                    maxLength={this.pwdInputState.maxLength}
                                    secureTextEntry={true}
                                    clearButtonMode={this.phoneInputState.clearButtonMode}
                                    style={styles.pwdInput}
                                    onChangeText={pwd => this.handlePwdFieldChange(pwd)}
                                />
                            </View>



                        </View>

                        {/* 注册*/}
                        <View style={styles.centeView}>

                            <LoginBtn
                                ref={loginBtn => this.loginBtn = loginBtn}
                                title="立即注册"
                                disabled={true}
                                onPress={this.registAction.bind(this)}>

                            </LoginBtn>


                            <View style={styles.protocolView}>
                                <Text style={styles.protocolText}>注册即代表同意《</Text>


                                <OrangeButton title='Q易借服务协议'
                                              onPress= {this.protocolClickAction}/>

                                <Text style={styles.protocolText}>》</Text>
                            </View>

                        </View>

                        {/*底部*/}
                        <View style={styles.bottomView}>
                            <Text style={styles.haveAccountText}>已有账号？</Text>

                            <OrangeButton title='直接登录'
                                          onPress= {this.loginAction} >

                            </OrangeButton>

                        </View>


                    </KeyboardAvoidingView>

                </View>



            </ScrollView>
        );
    }
}



