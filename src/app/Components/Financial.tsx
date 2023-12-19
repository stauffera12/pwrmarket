import Link from "next/link";





export default function FinancialComponent() {

    return (
        <div className="w-full flex justify-center py-[60px] max-lg:py-10 max-md:py-6 mt-[120px]  max-md:pt-[85px]">
            <div className="w-[90%] max-w-[1220px] text-[#444444]">
                <p className="text-[28px] font-semibold pb-4 max-md:text-[20px]">Financial Incentive</p>
                <p className="pt-2 max-md:text-[14px] md:leading-7 max-md:leading-6">H&S Energy Products, LLC dba Power Market offers financial incentives to members of our Power Rewards loyalty program (the “Program”). To take advantage of the Program, you must agree to our Terms and Conditions and Privacy Policy. These financial incentives will range from earning discounts on fuel transactions at the pump to discounts earned based on transactions that occur in our stores. For example, we may offer “Buy 1 Get 1 Free” and “Buy 2 and Save Money” type promotions to Program members. These promotions will be available through the Power Market App. Below you will find additional examples of the financial incentives that we may offer to Program Members:</p>

                <p className="pt-2 max-md:text-[14px] md:leading-7 max-md:leading-6"> <span className="px-2">●</span>Cents per gallon (2 separate transactions)</p>
                <p className="pt-2 pl-10 max-md:text-[14px] md:leading-7 max-md:leading-6">Buy 1 [promotional product] and earn 2¢/gal</p>
                <p className="pt-2 pl-10 max-md:text-[14px] md:leading-7 max-md:leading-6"> Next, purchase fuel to redeem the 2¢/gal rewards for a price rollback at the pump</p>

                <p className="pt-2 max-md:text-[14px] md:leading-7 max-md:leading-6"><span className="px-2">●</span>Instant discount – Buy 1 or more and Save Money</p>
                <p className="pt-2 pl-10 max-md:text-[14px] md:leading-7 max-md:leading-6">Buy 2 [promotional products] and save $1 on purchase</p>
                <p className="pt-2 pl-10 max-md:text-[14px] md:leading-7 max-md:leading-6">Buy 1 [promotional product] and save $0.50 on purchase</p>
                <p className="pt-2 max-md:text-[14px] md:leading-7 max-md:leading-6"><span className="px-2">●</span>Club offers – Buy 1 or More, Get 1 Free</p>
                <p className="pt-2 pl-10 max-md:text-[14px] md:leading-7 max-md:leading-6">Buy 1 or 2 [promotional products], as designated, and earn 1 free designated [promotional product]</p>

                <p className="pt-2 max-md:text-[14px] md:leading-7 max-md:leading-6">When you sign up for the Program, you allow us to collect, retain, and use personal information about you and your transactions with us. This personal information may include the categories of personal information listed in our Privacy Policy, including personal identifiers, contact information, commercial & transactional information, and mobile app account information and usage.</p>
                <p className="pt-2 max-md:text-[14px] md:leading-7 max-md:leading-6">In order to sign up for the Program and be eligible to earn and receive these financial incentives, Program members must provide their name, cell phone number, and email address and must create an account with a username and password on our Power Market mobile app. We will use the information you provide to communicate with you regarding the Program and our products and services, to offer you promotions and financial incentives as part of the Program, to track the financial incentives you have accumulated through transactions at our stores and your usage of the financial incentives, and to respond to your inquiries and requests. Your phone number will be used as an ID number to identify you and communicate with you via text message. As a Program member you would receive a monthly offer email in addition to the introduction email and any password recovery email.</p>
                <p className="pt-2 max-md:text-[14px] md:leading-7 max-md:leading-6">You can sign up for the Program and opt-in to the financial incentive program as follows:</p>
                <p className="pt-2 max-md:text-[14px] md:leading-7 max-md:leading-6"><span className="px-2">●</span>You can sign up at the register at any of our stores by yourself using the store-provided tablet or other electronic device, or with help from the cashier.</p>
                <p className="pt-2 max-md:text-[14px] md:leading-7 max-md:leading-6"><span className="px-2">●</span>You can also sign up through the Power Market mobile app by clicking to create an account and entering the information requested.</p>

                <p className="pt-2 max-md:text-[14px] md:leading-7 max-md:leading-6">By signing up for the Program, each member consents to receiving email and text message communications from us regarding the Program and our products, services, promotions, and financial incentives including targeted advertising based on your transactional history as a Program member, though each member has the right to opt out of receiving such communications. In the event you receive any automated email or text message from us, you will be provided the option of opting out of receiving future emails and text messages, whether through an unsubscribe link in the email or by texting back “STOP”. Standard text messaging fees may apply based on your cell phone carrier plan.</p>
                <p className="pt-2 max-md:text-[14px] md:leading-7 max-md:leading-6">You have the right to withdraw from this financial incentive program. You may withdraw at any time by deleting your account through the menu in the mobile App. You may also withdraw from the Program by submitting an online request through the form available <Link className="text-blue-500" href={'/ccpa'}>HERE </Link> or calling g our toll-free line 1 (888) 598-0521. When you delete your account, you will automatically be opting out of all future promotions and communications. That said, please be aware that deleting your account will result in you losing out on being able to use or take advantage of any previously offered incentives and rewards that you received through the Program but had not yet used as of the time you delete your account.</p>
                <p className="pt-2 max-md:text-[14px] md:leading-7 max-md:leading-6">We are allowed by law to offer financial incentives, and price and service differences to you if the differences are directly related to the value provided by your data. We offer more discounts, promotions and rewards to Program members in order to incentivize them to visit our stores more often, engage in more transactions, and try different products and services. We will use the data we collect through the Program to study the purchasing patterns of our customers and design offers that are catered to customer demand, as well as to evaluate each store &rsquo;s performance, products offered, and services. Download Our AppFollow UsCheck Us OutInfoCall Us 24/7EmailAddress2860 N. Santiago Blvd, Orange, CA 92867(714) 761-5426customerservice@hnsenergy.com LegalTerms & Conditions Home Locations Deals Rewards Careers Contact About Carwash Papa Sal&rsquo;s Download Our App! Privacy & Policy StatementFinancial IncentiveCCPA</p>

            </div>
        </div>
    )
}