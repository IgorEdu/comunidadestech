import css from 'styled-jsx/css'

import { colors } from '/utils/variables'

export default css`
  .container {
    padding-top: 2.375rem;
  }

  .menu-label {
    color: ${colors.dark};
  }

  .card-wrapper {
    margin-top: 1.25rem;
  }

  .title {
    color: ${colors.dark};
    margin-bottom: 1.125rem;
  }

  .is-divider {
    border: 2px solid ${colors.wildSand};
    margin: 2.375rem 0 1.875rem;
  }

  .invite-card {
    border-radius: 4px;
    display: flex;
    justify-content: space-between;

    .card-content {
      padding: 0.75rem;
    }

    .invite-buttons {
      border-left: solid 1px rgba(10, 10, 10, 0.1);
      display: flex;
      padding: 0.75rem 1.5rem;

      button {
        background: none;
        border: none;
        color: ${colors.primary};
        cursor: pointer;
        font-size: 16px;
        font-weight: bold;
        padding: 0;
        margin: 0.75px;

        :first-of-type {
          margin-right: 2.25rem;
        }
      }
    }
  }

  .empty-state {
    font-size: 20px;
    margin-top: 33px;
  }
  
  .container.head {
    margin-bottom: 240px;
  }

  .info {
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 2px;
    line-height: 24px;
  }

  .privacy-buttons {
    cursor: initial;
    display: flex;
    justify-content: left;
  }

  .privacy-btn {
    background-color: ${colors.white};
    border: 1px solid ${colors.primary};
    border-radius: 4px;
    color: ${colors.primary};
    cursor: pointer;
    display: flex;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 3px;
    margin-top: 18px;
    padding: 5px 25px;
    text-align: center;
  }

  @media screen and (max-width: 769px) {
    .container {
      padding-top: 1.5rem;
    }
    .columns:not(:last-child) {
      margin-bottom: calc(2rem);
    }
    .title {
      margin-bottom: 0;
    }
    .card-wrapper {
      margin-top: 0;
    }
    .is-divider {
      display: none;
    }
    .container.head {
      margin-bottom: 150px;
      margin-top: 7rem;
    }
  }
`
