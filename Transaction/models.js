import mongoose from 'mongoose'

export const Customer = mongoose.model(
    'Customer',
    mongoose.Schema({
        name: String,
        id_identity: Number,
        phone_number: String,
        address: String,
        created_at: Date,
    })
)

export const Items = mongoose.model(
    'Items',
    mongoose.Schema({
        name: String,
        deskription: String,
        condition: String,
        price: Number,
        created_at: Date,
    })
)

export const Transaction = mongoose.model(
    'Transaction',
    mongoose.Schema({
        transaction_date: Date,
        total: Number,
        payment_price: Number,
        change: Number,
        customer: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Customer',
        },
        transaction_details: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'TransactionDetail',
            }
        ],
        created_at: Date,
    })
)

export const TransactionDetail = mongoose.model(
    'TransactionDetail',
    mongoose.Schema({
        transaction_id: String,
        Items: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Items',
        },
        start: Date,
        end: Date,
        subtotal: Number,
        created_at: Date,
    })
)
