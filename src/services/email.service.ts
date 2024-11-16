import { Injectable, Logger } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailService {
  private logger = new Logger('EmailService');

  private transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GOOGLE_EMAIL,
      pass: process.env.GOOGLE_PASSWORD,
    },
  });

  async sendHelo(email: string) {
    console.log('process.env.GOOGLE_EMAIL, :>> ', process.env.GOOGLE_EMAIL);
    console.log('process.env.GOOGLE_EMAIL, :>> ', process.env.GOOGLE_PASSWORD);
    const mailOptions = {
      from: process.env.GOOGLE_EMAIL,
      to: email,
      subject: 'HELLO',
      html: `
          <p>Hello,</p>
          <p>Please confirm your email address by entering the following confirmation code:</p>
          <p>Thank you!</p>
      `,
    };

    this.transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        this.logger.error(error);
      } else {
        this.logger.log(`Email sent to ${email}: ` + info.response);
      }
    });
  }

  async sendOrderInfo(
    email: string,
    orderNumber: string,
    totalPrice: number,
    date: string,
    deliveryAddress?: any,
  ): Promise<void> {
    // Формуємо HTML контент залежно від наявності deliveryAddress
    const htmlContent = deliveryAddress
      ? `
        <p>Доброго дня!</p>
        <p>Ваше замовлення прийнято.</p>
        <p>Номер замовлення: <strong>${orderNumber}</strong></p>
        <p>Сума замовлення: <strong>${totalPrice} грн</strong></p>
        <p>Адреса доставки:</p>
        <ul>
          <li>Місто: ${deliveryAddress.city}</li>
          <li>Вулиця: ${deliveryAddress.street}</li>
          <li>Номер будинку: ${deliveryAddress.buildingNumber}</li>
        </ul>
        <p>Дата доставки: ${date}</p>
        <p>Дякуємо за ваше замовлення!</p>
      `
      : `
        <p>Доброго дня!</p>
        <p>Ваше замовлення прийнято.</p>
        <p>Номер замовлення: <strong>${orderNumber}</strong></p>
        <p>Сума замовлення: <strong>${totalPrice} грн</strong></p>
        <p>Самовивіз:</p>
        <ul>
          <li>Місто: Київ</li>
          <li>Вулиця: Еспланадна</li>
          <li>Номер будинку: 34/2</li>
        </ul>
        <p>Дата самовивозу: ${date}</p>
        <p>Дякуємо за ваше замовлення!</p>
      `;

    // Встановлюємо опції для відправки листа
    const mailOptions = {
      from: process.env.GOOGLE_EMAIL,
      to: email,
      subject: 'Замовлення підтверджено',
      html: htmlContent,
    };

    // Відправка листа та логування
    this.transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        this.logger.error(`Помилка надсилання листа: ${error}`);
      } else {
        this.logger.log(`Лист надіслано на ${email}: ${info.response}`);
      }
    });
  }
}
