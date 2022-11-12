import yfinance as yf
import pandas as pd
import numpy as np  

def chart_getter(Ticker , inter , period):
    df = yf.download(tickers = Ticker, interval = inter, period = period)
    return df.to_json("CandelData.json")

# chart_getter("BTC-USD" , "5m" , "3d")