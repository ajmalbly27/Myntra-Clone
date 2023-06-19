// import { useEffect } from "react";

const OtpPageInput = ({handleOTPChange, otp, otpInputRefs}) => {

    // useEffect(() => {
    //     generateOTP();
    // }, [])

    return(
        <div>
            {otp.map((digit, index) => (
                <input 
                    key={index}
                    type="text"
                    value={digit}
                    onChange={(event) => handleOTPChange(index, event)}
                    ref={(ref) => (otpInputRefs.current[index] = ref)}
                    maxLength={1}
                />
            ))}
        </div>
    )
}
export default OtpPageInput;