import React from 'react'
import Eye from '@/Assets/auth/eye.svg'
import EyeOff from '@/Assets/auth/eye-off.svg'


const PasswordVisiblity = (
    { showPassword, setShowPassword }: {
        showPassword: boolean;
        setShowPassword: (showPassword: boolean) => void;
    }
) => {
  return (
      <div
          onClick={() => {
              setShowPassword(!showPassword);
          }}
      >
          {showPassword ? (
              <img src={Eye.src} alt="eye-icon" />
          ) : (
              <img src={EyeOff.src} alt="eye-off-icon" />
          )}
      </div>
  );
}

export default PasswordVisiblity